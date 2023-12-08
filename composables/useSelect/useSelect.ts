import { TariffsItem } from "~/types/tariffs/tariffs";

let selectedRef = ref<any>(null);

const useSelect = (item: any) => {
  selectedRef = item;
  return console.log("tariffsItem", selectedRef);
};

export default useSelect;
