import logging
import re

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

try:
    import fitz  # PyMuPDF
    FITZ_AVAILABLE = True
except ImportError:
    logger.warning("fitz (PyMuPDF) not found. PDF parsing will be unavailable. Run 'pip install pymupdf' to enable.")
    FITZ_AVAILABLE = False

def extract_text_from_pdf(pdf_bytes: bytes) -> str:
    """Extract raw text from PDF bytes via PyMuPDF."""
    if not FITZ_AVAILABLE:
        return "PDF PARSING ERROR: PyMuPDF dependency missing."
    
    text = ""
    try:
        doc = fitz.open(stream=pdf_bytes, filetype="pdf")
        for page in doc:
            text += page.get_text()
    except Exception as e:
        print(f"Error parsing PDF: {e}")
    return text

def parse_resume(pdf_bytes: bytes):
    """Parses text and extracts intelligence (Skills/Counts)."""
    raw_text = extract_text_from_pdf(pdf_bytes)
    
    # Advanced logic using regex/keyword matching in python
    all_skills = [
        "Python", "JavaScript", "TypeScript", "React", "Node.js", "PyTorch", 
        "TensorFlow", "FastAPI", "SQL", "Docker", "AWS", "Machine Learning", 
        "Deep Learning", "LLM", "NLP", "RAG", "LangChain", "Kubernetes", "PostgreSQL"
    ]
    
    extracted_skills = []
    text_lower = raw_text.lower()
    for skill in all_skills:
        # Simple word boundary check
        if re.search(rf'\b{re.escape(skill.lower())}\b', text_lower):
            extracted_skills.append(skill)
            
    experience_count = len(re.findall(r'(?i)\b(experience|work|intern|internship|role|position)\b', raw_text))
    projects_count = len(re.findall(r'(?i)\b(project|developed|built|created)\b', raw_text))

    return {
        "raw_text": raw_text,
        "extracted": {
            "skills": extracted_skills,
            "experience_indicators": experience_count,
            "project_indicators": projects_count
        }
    }
