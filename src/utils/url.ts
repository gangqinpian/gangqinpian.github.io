/** 给内部路径加上站点基础路径；base 为 "/" 时原样返回。 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const clean = path.replace(/^\/+/, '');
  return clean ? `${base}/${clean}` : `${base}/`;
}

/** 外部链接原样返回，本地 public 资源加上 base。 */
export function assetUrl(path: string): string {
  return /^(https?:)?\/\//.test(path) ? path : withBase(path);
}

/** 生成文章链接，逐段编码以支持中文文件名。 */
export function postPath(id: string): string {
  return withBase(`posts/${id.split('/').map(encodeURIComponent).join('/')}/`);
}
