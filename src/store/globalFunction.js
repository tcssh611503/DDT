export const globalMixin = {
  methods: {
    _formatTime(date) {
      let re = new Date(date.replace(/\//g, "-"));
      const year = re.getFullYear();
      const month = re.getMonth() + 1;
      const day = re.getDate();

      // 轉成字串，如果低於10，前面加上'0'
      const monthString = month < 10 ? "0" + month : "" + month;
      const dayString = day < 10 ? "0" + day : "" + day;
      let formatTime = `${year}/${monthString}/${dayString}`;
      return formatTime;
    },
    _sortTimestamp(date) {
      let timestamp = new Date(date.replace(/\//g, "-"));
      return timestamp.getTime();
    },
  }
}
