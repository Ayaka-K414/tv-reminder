export const SearchButton = () => {
  return (
    <div>
      <label htmlFor="area-select">地域:</label>

      <select name="areas" id="area-select">
        <option value="">プルダウンから選択</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </select>
    </div>
  );
};
