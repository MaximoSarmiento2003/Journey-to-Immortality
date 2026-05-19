import { QI_REALMS }
from "../data/realms";

export const getRealmByLevel = (
  level: number
) => {

  return QI_REALMS.find(
    (realm) =>
      realm.level === level
  );
};

export const getNextRealm = (
  currentLevel: number
) => {

  return QI_REALMS.find(
    (realm) =>
      realm.level ===
      currentLevel + 1
  );
};