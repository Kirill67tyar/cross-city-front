import TariffsState from "~/types/tariffs/tariffs";

const { data } = useFetch<TariffsState>(
  "https://cross-city-taxi.ru/core/api/tariffs/list/"
);

console.log();
