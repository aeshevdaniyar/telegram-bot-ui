export interface ChatFolder {
  name: string;
  id: string;
  files: ChatFile[];
}

export interface ChatFile {
  name: string;
  id: string;
  type: ChatType;
  children: ChatFile[];
}

export type ChatType = "text" | "image" | "video" | "audio" | "folder";
