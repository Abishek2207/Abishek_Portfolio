import fs from "fs/promises";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "src/data");

async function ensureDir() {
  await fs.mkdir(DATA_DIR, { recursive: true });
}

export const mockDb = {
  async read<T>(fileName: string): Promise<T[]> {
    await ensureDir();
    const filePath = path.join(DATA_DIR, `${fileName}.json`);
    try {
      const data = await fs.readFile(filePath, "utf-8");
      return JSON.parse(data);
    } catch {
      return [];
    }
  },

  async write<T>(fileName: string, data: T[]) {
    await ensureDir();
    const filePath = path.join(DATA_DIR, `${fileName}.json`);
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
  },

  async findMany<T>(fileName: string) {
    return this.read<T>(fileName);
  },

  async create<T extends { id?: string }>(fileName: string, item: T) {
    const data = await this.read<T>(fileName);
    const newItem = { ...item, id: item.id || Math.random().toString(36).substr(2, 9) };
    data.push(newItem);
    await this.write(fileName, data);
    return newItem;
  }
};
