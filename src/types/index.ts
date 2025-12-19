
import type { ElementType } from 'react';

export interface Skill {
  name: string;
  Icon: ElementType;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  sourceUrl?: string;
}

