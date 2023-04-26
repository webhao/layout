export interface Layouts {
  forceatlas2: (
    options: Forceatlas2LayoutOptions
  ) => Promise<{ nodes: number[] }>;
  force2: (options: Force2LayoutOptions) => Promise<{ nodes: number[] }>;
  fruchterman: (
    options: FruchtermanLayoutOptions
  ) => Promise<{ nodes: number[] }>;
}

export interface Forceatlas2LayoutOptions extends ForceLayoutOptions {
  ka: number;
  kg: number;
  kr: number;
  speed: number;
  prevent_overlapping: boolean;
  kr_prime: number;
  node_radius: number;
  strong_gravity: boolean;
  lin_log: boolean;
  dissuade_hubs: boolean;
  center: [number, number];
}
export interface Force2LayoutOptions extends ForceLayoutOptions {
  edge_strength: number;
  link_distance: number;
  node_strength: number;
  coulomb_dis_scale: number;
  factor: number;
  interval: number;
  damping: number;
  center: [number, number];
  kg: number; // gravity
  max_speed: number;
  min_movement: number;
}

export interface FruchtermanLayoutOptions extends ForceLayoutOptions {
  center: [number, number];
  ka: number; // k
  kg: number; // gravity
  kr: number; // 0.01
  speed: number; // speed
  damping: number; // maxDisplace
  interval: number; // *= maxDisplace 0.99
}

export interface ForceLayoutOptions {
  // name: number;
  nodes: number;
  edges: number[];
  masses: number[];
  weights: number[];
  positions: number[];
  iterations: number;
}