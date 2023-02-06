import { FitnessUser } from "../database/entitys/user.entity";

export const validateInput = (userData: FitnessUser) => {
  const email = userData.email.match(
    /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm
  );

  const password = userData.password.match(
    /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/
  );

  if (email === null) {
    return "Not email";
  }

  if (password === null) {
    return "Password not strong";
  }

  return null;
};
