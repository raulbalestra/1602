const removeMarkdown = (richTextMd) => {
  let text = richTextMd;

  // Remove headers
  text = text.replace(/#+\s(.+)/g, '$1');
    
  // Remove bold and italic (both * and _ notations)
  text = text.replace(/(\*|_){1,3}([^*|_]+)\1{1,3}/g, '$2');
  
  // Remove strikethrough
  text = text.replace(/~~(.+?)~~/g, '$1');
  
  // Remove inline code
  text = text.replace(/`(.+?)`/g, '$1');
  
  // Remove links but keep the text
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1');
  
  // Remove images
  text = text.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '');
  
  // Remove blockquotes
  text = text.replace(/>\s(.+)/g, '$1');
  
  // Remove horizontal rules
  text = text.replace(/---|___|\*\*\*/g, '');
  
  // Remove unordered list markers
  text = text.replace(/^\s*[-+*]\s+/gm, '');
  
  // Remove ordered list markers
  text = text.replace(/^\s*\d+\.\s+/gm, '');
  
  // Remove extra newlines and whitespace
  text = text.replace(/\n{2,}/g, '\n').trim();
  
  return text;
}

const getContentText = (blogContent) => {
  let text = '';
  blogContent.forEach((block) => {
    if (block.__component === 'blog.rich-text-md') {
      text += removeMarkdown(block.richTextMd);
    }
  });
  return text;
};

const calculateReadingTime = (text) => {
  const wordsPerMinute = 240;
  const textLength = text.split(/\s+/).length;
  const readingTime = Math.ceil(textLength / wordsPerMinute);
  return readingTime;
};

const getReadingTime = () => {
    let blogContent
    try {
      // get request
      const ctx = strapi.requestContext.get();
      blogContent = ctx.request.body['blogContent'];
    } catch (error) {
      // request not available
      return 0;
    }
    // content missing
    if (!blogContent) {
      return 0;
    }
    const text = getContentText(blogContent);
    // text missing
    if (!text) {
      return 0;
    }
    const readingTime = calculateReadingTime(text);
    return readingTime;
};

module.exports = {
  async beforeUpdate(event) {
    const { data } = event.params;
    const readingTime = getReadingTime();
    if (readingTime === 0) {
      return;
    }
    data.readingTime = readingTime;
  },
  async beforeCreate(event) {
    const { data } = event.params;
    const readingTime = getReadingTime();
    if (readingTime === 0) {
      return;
    }
    data.readingTime = readingTime;
  }
}