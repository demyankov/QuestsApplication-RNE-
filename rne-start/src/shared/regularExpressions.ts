// Перед @ должны быть 1 и более символов, букв или цифр (не допускаются символы: (<>()[]\.,;:)
// Обязательное наличие @
// Доменное имя (между @ и .) допускается писать только из латинких букв и цифр, а также их комбинаций через .
// Обязательное наличие . перед указанием доменной зоны.
// Доменная зона должна состоять минимум из двух букв латинского алфавита
export const EMAIL_PATTERN =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Имя может состоять из букв латинского и русского алфавита
export const USERNAME_PATTERN = /^([a-z]+|[а-яё]+)$/iu;

export const TEXT_PATTERN = /^([a-z0-9-\s*]+|[а-яё0-9-\s*]+){0,15}$/iu;

export const NUMBER_PATTERN = /^\d+$/;

export const COUNTRY_PATTERN = /^[a-zA-Zа-яА-ЯёЁ,.!?()'\s-]*$/;
