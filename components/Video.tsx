export type VideoProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  img: string;
  views: string;
  ago: string;
  channel?: string
}

function Video({
  title,
  img,
  views,
  ago,
  channel = 'Discord',
  ...props
}: VideoProps) {
  return (
    <div className="flex" {...props}>
      <img src={img} className="rounded-lg w-44 h-24" />
      <div className="flex-1 p-4">
        <h2>{title}</h2>
        <p className="text-gray-200 text-sm">{channel}</p>
        <p className="text-gray-200 text-sm">{views} - {ago}</p>
      </div>
    </div>
  )
}

export default Video