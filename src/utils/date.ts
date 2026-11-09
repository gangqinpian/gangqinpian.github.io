const formatter = new Intl.DateTimeFormat('zh-CN', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  // 文章日期按 UTC 解析，固定用 UTC 格式化，避免差一天
  timeZone: 'UTC',
});

export const formatDate = (date: Date) => formatter.format(date);
