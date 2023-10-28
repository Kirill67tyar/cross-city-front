import SelectedItem from "@/types/selectTypes";

const activeRef = ref<boolean>(false);
const selectedRef = ref<SelectedItem | null>(null);

const handleClickSelectItem = ({
  id,
  car_class,
  quantity_seats_display,
  price_per_km,
}: SelectedItem) => {
  const selectData: SelectedItem = {
    id,
    car_class,
    quantity_seats_display,
    price_per_km,
  };
  selectedRef.value = selectData;
  activeRef.value = false;

  return {
    selectedRef,
    activeRef,
  };
};

export { selectedRef, handleClickSelectItem };
