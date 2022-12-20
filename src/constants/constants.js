export const list = [
  { id: 0, weekday: "D" },
  { id: 1, weekday: "S" },
  { id: 2, weekday: "T" },
  { id: 3, weekday: "Q" },
  { id: 4, weekday: "Q" },
  { id: 5, weekday: "S" },
  { id: 6, weekday: "S" },
];

export let day = new Date().getDay();
switch (day) {
  case 0:
    day = "Domingo";
    break;
  case 1:
    day = "Segunda";
    break;
  case 2:
    day = "Terça";
    break;
  case 3:
    day = "Quarta";
    break;
  case 4:
    day = "Quinta";
    break;
  case 5:
    day = "Sexta";
    break;
  case 6:
    day = "Sábado";
    break;
  default:
    day = "Wrong";
}
