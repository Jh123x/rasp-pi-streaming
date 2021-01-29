// Regex to check ip
const ip_pattern = "\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}";
const ip_regex = new RegExp(ip_pattern);

function validateIP(input) {
  return ip_regex.test(input);
}

export default validateIP;
