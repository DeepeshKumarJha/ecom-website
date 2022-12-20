import CollectionProductView from "../../components/productView/collectionProductView";

const AllCollections = () => {
  return (
    <>
      <CollectionProductView type={"black-shoes"} />
      <CollectionProductView type={"sneakers"} />
      <CollectionProductView type={"boots"} />
      <CollectionProductView type={"sport-shoes"} />
      <CollectionProductView type={"man-shoes"} />
    </>
  );
};

export default AllCollections;
