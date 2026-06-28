/**
 * API Client for Abishek R Portfolio Platform
 * Handles all HTTP requests to the backend
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

interface RequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  body?: Record<string, unknown> | string;
  token?: string;
}

// Get token from localStorage
function getToken(): string | null {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('access_token');
  }
  return null;
}

// Generic API request function
async function apiRequest<T>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> {
  const {
    method = 'GET',
    headers = {},
    body,
    token = getToken(),
  } = options;

  const url = `${API_BASE_URL}${endpoint}`;

  const config: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  };

  if (body) {
    config.body = typeof body === 'string' ? body : JSON.stringify(body);
  }

  try {
    const response = await fetch(url, config);

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || `HTTP ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`API Error [${method} ${endpoint}]:`, error);
    throw error;
  }
}

// ============================================================
// AUTH API
// ============================================================

export async function login(username: string, password: string) {
  const formData = new FormData();
  formData.append('username', username);
  formData.append('password', password);

  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  const data = await response.json();
  localStorage.setItem('access_token', data.access_token);
  return data;
}

export async function logout() {
  localStorage.removeItem('access_token');
}

export async function getCurrentUser() {
  return apiRequest('/auth/me');
}

// ============================================================
// PROJECTS API
// ============================================================

export async function getProjects(skip = 0, limit = 10, featuredOnly = false) {
  return apiRequest(`/projects?skip=${skip}&limit=${limit}&featured_only=${featuredOnly}`);
}

export async function getProject(id: string) {
  return apiRequest(`/projects/${id}`);
}

export async function createProject(data: FormData) {
  const token = getToken();
  const response = await fetch(`${API_BASE_URL}/projects`, {
    method: 'POST',
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: data,
  });

  if (!response.ok) {
    throw new Error('Failed to create project');
  }

  return await response.json();
}

export async function updateProject(id: string, data: FormData) {
  const token = getToken();
  const response = await fetch(`${API_BASE_URL}/projects/${id}`, {
    method: 'PUT',
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: data,
  });

  if (!response.ok) {
    throw new Error('Failed to update project');
  }

  return await response.json();
}

export async function deleteProject(id: string) {
  return apiRequest(`/projects/${id}`, {
    method: 'DELETE',
  });
}

// ============================================================
// CERTIFICATES API
// ============================================================

export async function getCertificates(skip = 0, limit = 10, featuredOnly = false) {
  return apiRequest(`/certificates?skip=${skip}&limit=${limit}&featured_only=${featuredOnly}`);
}

export async function getCertificate(id: string) {
  return apiRequest(`/certificates/${id}`);
}

export async function createCertificate(data: FormData) {
  const token = getToken();
  const response = await fetch(`${API_BASE_URL}/certificates`, {
    method: 'POST',
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: data,
  });

  if (!response.ok) {
    throw new Error('Failed to create certificate');
  }

  return await response.json();
}

export async function updateCertificate(id: string, data: FormData) {
  const token = getToken();
  const response = await fetch(`${API_BASE_URL}/certificates/${id}`, {
    method: 'PUT',
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: data,
  });

  if (!response.ok) {
    throw new Error('Failed to update certificate');
  }

  return await response.json();
}

export async function deleteCertificate(id: string) {
  return apiRequest(`/certificates/${id}`, {
    method: 'DELETE',
  });
}

// ============================================================
// SKILLS API
// ============================================================

export async function getSkills(category?: string) {
  const url = category ? `/skills?category=${category}` : '/skills';
  return apiRequest(url);
}

export async function createSkill(data: FormData) {
  const token = getToken();
  const response = await fetch(`${API_BASE_URL}/skills`, {
    method: 'POST',
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: data,
  });

  if (!response.ok) {
    throw new Error('Failed to create skill');
  }

  return await response.json();
}

export async function deleteSkill(id: number) {
  return apiRequest(`/skills/${id}`, {
    method: 'DELETE',
  });
}

// ============================================================
// EXPERIENCE API
// ============================================================

export async function getExperience() {
  return apiRequest('/experience');
}

export async function createExperience(data: FormData) {
  const token = getToken();
  const response = await fetch(`${API_BASE_URL}/experience`, {
    method: 'POST',
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: data,
  });

  if (!response.ok) {
    throw new Error('Failed to create experience');
  }

  return await response.json();
}

export async function updateExperience(id: string, data: FormData) {
  const token = getToken();
  const response = await fetch(`${API_BASE_URL}/experience/${id}`, {
    method: 'PUT',
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: data,
  });

  if (!response.ok) {
    throw new Error('Failed to update experience');
  }

  return await response.json();
}

export async function deleteExperience(id: string) {
  return apiRequest(`/experience/${id}`, {
    method: 'DELETE',
  });
}

// ============================================================
// RESUME API
// ============================================================

export async function parseResume(file: File) {
  const formData = new FormData();
  formData.append('file', file);

  const token = getToken();
  const response = await fetch(`${API_BASE_URL}/resume/parse`, {
    method: 'POST',
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Failed to parse resume');
  }

  return await response.json();
}

export async function downloadResume(filename: string) {
  return apiRequest(`/resume/download?filename=${filename}`);
}

// ============================================================
// GITHUB API
// ============================================================

export async function getGithubUser(username: string) {
  return apiRequest(`/github/user/${username}`);
}

export async function getGithubRepos(username: string, sort = 'stars') {
  return apiRequest(`/github/repos/${username}?sort=${sort}`);
}

// ============================================================
// AI METRICS API
// ============================================================

export async function getAIMetrics(metricName?: string, limit = 100) {
  const url = metricName 
    ? `/ai/metrics?metric_name=${metricName}&limit=${limit}`
    : `/ai/metrics?limit=${limit}`;
  return apiRequest(url);
}

export async function createAIMetric(data: FormData) {
  const token = getToken();
  const response = await fetch(`${API_BASE_URL}/ai/metrics`, {
    method: 'POST',
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: data,
  });

  if (!response.ok) {
    throw new Error('Failed to create metric');
  }

  return await response.json();
}

export async function getTrainingLogs(limit = 100) {
  return apiRequest(`/ai/training-logs?limit=${limit}`);
}

export async function createTrainingLog(data: FormData) {
  const token = getToken();
  const response = await fetch(`${API_BASE_URL}/ai/training-logs`, {
    method: 'POST',
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: data,
  });

  if (!response.ok) {
    throw new Error('Failed to create training log');
  }

  return await response.json();
}

// ============================================================
// HEALTH CHECK
// ============================================================

export async function healthCheck() {
  return apiRequest('/health');
}
