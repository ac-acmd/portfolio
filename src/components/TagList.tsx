type TagListProps = {
  tags: string[];
};

export default function TagList({ tags }: TagListProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className="text-xs px-2 py-0.5 bg-teal-light text-teal-dark rounded">
          {tag}
        </span>
      ))}
    </div>
  );
}
