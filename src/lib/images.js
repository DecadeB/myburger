const img = (id, w = 1200, extra = "") =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80${extra}`;

export { img };
