import NeighborHoodChip from '@/components/NeighborHoodChip';

interface Props {
  items: GeoJSON.Feature[];
  onRemove: (item: GeoJSON.Feature) => void;
}

const NeighborHoodCollection = ({ items, onRemove }: Props) => {
  return (
    <>
      {items.map((val, i) => (
        <NeighborHoodChip
          key={'location-chip-' + i}
          item={val}
          onClose={() => onRemove(val)}
        />
      ))}
    </>
  );
};

export default NeighborHoodCollection;
