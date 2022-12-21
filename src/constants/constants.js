export const weekDayList = {
  "pt-BR": [
    { id: 0, weekday: "D" },
    { id: 1, weekday: "S" },
    { id: 2, weekday: "T" },
    { id: 3, weekday: "Q" },
    { id: 4, weekday: "Q" },
    { id: 5, weekday: "S" },
    { id: 6, weekday: "S" },
  ],
  "en-US": [
    { id: 0, weekday: "S" },
    { id: 1, weekday: "M" },
    { id: 2, weekday: "T" },
    { id: 3, weekday: "W" },
    { id: 4, weekday: "T" },
    { id: 5, weekday: "F" },
    { id: 6, weekday: "S" },
  ],
};

export function getWeekday(language) {
  let day = new Date().getDay();
  if (language === "pt-BR") {
    switch (day) {
      case 0:
        return "Domingo";
      case 1:
        return "Segunda";
      case 2:
        return "Terça";
      case 3:
        return "Quarta";
      case 4:
        return "Quinta";
      case 5:
        return "Sexta";
      case 6:
        return "Sábado";
      default:
        return "Wrong";
    }
  } else if (language === "en-US") {
    switch (day) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      default:
        return "Wrong";
    }
  }
}

export const dictionary = {
  "pt-BR": {
    email: "email",
    password: "senha",
    buttonLogin: "Entrar",
    linkSignUp: "Não tem uma conta? Faça cadastro!",
    name: "nome",
    photo: "foto",
    buttonSignUp: "Cadastrar",
    linkLogin: "Já tem uma conta? Faça login!",
    textTodayUndone: "Nenhum hábito concluído ainda",
    textTodayDone: "dos hábitos concluídos",
    currentSequence: "Sequência atual: ",
    higherSequence: "Seu recorde: ",
    days: "dias",
    today: "Hoje",
    habits: "Hábitos",
    historic: "Histórico",
    habitsTitle: "Meus hábitos",
    habitsNonehabit:
      "Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!",
    createHabitName: "nome do hábito",
    createHabitCancelButton: "Cancelar",
    createHabitSaveButton: "Salvar",
  },
  "en-US": {
    email: "email",
    password: "password",
    buttonLogin: "Login",
    linkSignUp: "Don't have an account? Sign up!",
    name: "name",
    photo: "photo",
    buttonSignUp: "Sign Up",
    linkLogin: "Already have an account? Sign in!",
    textTodayUndone: "No habits completed yet",
    textTodayDone: "of completed habits",
    currentSequence: "Current sequence: ",
    higherSequence: "Your record: ",
    days: "days",
    today: "Today",
    habits: "Habits",
    historic: "Historic",
    habitsTitle: "My habits",
    habitsNonehabit:
      "You don't have any habits registered yet. Add a habit to start tracking!",
    createHabitName: "habit's name",
    createHabitCancelButton: "Cancel",
    createHabitSaveButton: "Save",
  },
};
