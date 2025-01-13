function findInAgenda(agenda, phone) {
  const entries = agenda
    .split("\n")
    .map((ag) => {
      const name = ag.slice(ag.indexOf("<"), ag.indexOf(">") + 1);
      const phone = ag.slice(ag.indexOf("+"), ag.indexOf("+") + 15);
      return {
        name: name.replace("<", "").replace(">", ""),
        address: ag.replace(name, "").replace(phone, "").trim(),
        phone: phone,
      };
    })
    .filter((ag) => ag.phone.includes(phone));

  return entries.length === 1
    ? { name: entries[0].name, address: entries[0].address }
    : null;
}

const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`;

console.log(findInAgenda(agenda, "34-600-123-456"));
