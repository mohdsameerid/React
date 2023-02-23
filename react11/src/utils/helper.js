export function filterdata(searchText, restaurant){
    const data =  restaurant.filter( (restaurant) => 
          restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
          );
    return data;
}