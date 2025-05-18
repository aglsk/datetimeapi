export default function handler(req, res) {
  const now = new Date();

  const format = (n) => n.toString().padStart(2, '0');

  const datetime = `${now.getFullYear()}-${format(now.getMonth() + 1)}-${format(now.getDate())} ${format(now.getHours())}:${format(now.getMinutes())}:${format(now.getSeconds())}`;
  const date = datetime.split(' ')[0];
  const time = datetime.split(' ')[1];

  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({ datetime, date, time });
    }
