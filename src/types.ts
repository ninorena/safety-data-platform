export interface CrashRecord {
  id: string;
  date: string;
  time: string;
  latitude: number;
  longitude: number;
  location_description: string;
  severity: 'property_damage_only' | 'injury' | 'serious_injury' | 'fatal';
  crash_type: string;
  weather: string;
  road_condition: string;
  vehicles_involved: number;
  pedestrians_involved: number;
  cyclists_involved: number;
  contributing_factors: string[];
  narrative: string;
  injuries: number;
  fatalities: number;
}

export interface HighInjuryIntersection {
  name: string;
  latitude: number;
  longitude: number;
  total_crashes: number;
  fatal: number;
  serious_injury: number;
  severity_score: number;
  primary_crash_types: string[];
}

export interface HighInjuryNetwork {
  intersections: HighInjuryIntersection[];
}

export interface Countermeasure {
  id: string;
  name: string;
  description: string;
  applicable_crash_types: string[];
  crash_reduction_factor: string;
  source: string;
  estimated_cost: string;
}

export interface CountermeasureRecommendations {
  recommendations: Countermeasure[];
}
