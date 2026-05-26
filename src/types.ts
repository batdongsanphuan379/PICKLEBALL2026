export interface Registration {
  id: string;
  fullName: string;
  phone: string;
  ageGroup: 'kid' | 'student' | 'adult';
  skillLevel: 'beginner' | 'intermediate_advanced';
  schedulePreference: string;
  note?: string;
  registeredAt: string;
  status: 'pending' | 'confirmed';
}

export interface Benefit {
  id: string;
  title: string;
  subTitle: string;
  description: string;
  iconName: string; // Lucide icon name mapping
}

export interface TacticStep {
  id: number;
  title: string;
  tagline: string;
  description: string;
  colorClass: string;
  hoverAccent: string;
  details: string[];
}

export interface TargetGroup {
  id: string;
  title: string;
  ageRange: string;
  description: string;
  features: string[];
  gradient: string;
}
