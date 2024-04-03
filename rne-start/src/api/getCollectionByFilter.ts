import {
  QueryFieldFilterConstraint,
  WhereFilterOp,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase";

interface IFbFilter {
  field: string;
  operator: WhereFilterOp;
  value: string | number;
}

export const getFilteredCollection = async (
  collectionName: string,
  filters: IFbFilter[]
) => {
  if (!collectionName) {
    return;
  }

  // Определяем переменную для формирования строки фильтрации
  let queryFilters: QueryFieldFilterConstraint[] = [];

  // Наполняем переменную данными для фильтрации
  filters.forEach((filter) => {
    queryFilters = [
      ...queryFilters,
      where(filter.field, filter.operator, filter.value),
    ];
  });

  // Получаем полную ссылку с фильтрами на коллекцию
  const collectionRef = query(collection(db, collectionName), ...queryFilters);

  // Получаем данные
  let querySnapshot = await getDocs(collectionRef);

  //Перебираем полученные данные и возвращаем результат
  let col = [];
  querySnapshot.forEach((document) => {
    col.push(document.data());
  });

  return col;
};
