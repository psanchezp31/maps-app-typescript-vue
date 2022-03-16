import { computed, defineComponent, ref } from "vue";
import SearchResults from "../search-results/SearchResults.vue";
import { usePlacesStore } from '../../composables/usePlacesStore';

export default defineComponent({
  components: {
    SearchResults,
  },
  setup() {
    const debouncedTimeout = ref();
    const debouncedValue = ref("");
    const {searchPlacesByTerm} = usePlacesStore()
    return {
      debouncedValue,
      searchTerm: computed({
        get() {
          return debouncedValue.value;
        },
        set(val: string) { //esto es para que se esperen 2 segundos luego de que la persona escriba, para que no hayan tantas llamadas al backend de mapbox
          if (debouncedTimeout.value) clearTimeout(debouncedTimeout.value);
          debouncedTimeout.value = setTimeout(() => {
            debouncedValue.value = val;
            searchPlacesByTerm(val)
          }, 500);
        },
      }),
      
    };
  },
});
