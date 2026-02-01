export interface Project {
  id: string;
  title: string;
  tags: string[];
  description: string;
  imageUrl: string;
  status: 'DEPLOYED' | 'CLASSIFIED' | 'v.1.0.4' | 'BETA';
  statusColor: string; // Tailwind color class for badge
  videoUrl?: string; // Optional YouTube video link
}

export interface LogEntry {
  id: string;
  role: string;
  roleColor: string; // Tailwind text color class
  period: string;
  description: string;
}

export interface GaugeProps {
  percentage: number;
  label: string;
  color: string;
}
