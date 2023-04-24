export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 flex flex-col shadow bg-white dark:bg-black dark:text-white">
      <div className="w-full flex justify-center p-2">venn</div>
      <div className="w-full flex p-2">
        <input
          className="w-full px-4 py-1"
          type="search"
          placeholder="search..."
        />
      </div>
    </header>
  )
}
