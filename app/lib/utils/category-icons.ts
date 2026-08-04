import {
  Briefcase,
  FileText,
  GraduationCap,
  HeartPulse,
  Landmark,
  Laptop,
  type LucideIcon,
  Palette,
  Wifi,
} from 'lucide-react';

export const CATEGORY_ICONS: Record<string, LucideIcon> = {
  Landmark,
  GraduationCap,
  HeartPulse,
  FileText,
  Palette,
  Laptop,
  Briefcase,
  Wifi,
};

export function getCategoryIcon(name: string): LucideIcon {
  return CATEGORY_ICONS[name] ?? FileText;
}
