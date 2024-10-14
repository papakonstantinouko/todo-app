export function Tabs({ todos, tabs, selectedTab, setSelectedTab }) {
  return (
    <nav>
      {tabs.map((tab) => {
        let tasks = todos.length
        if (tab !== 'All')
          tasks = todos.filter((x) =>
            tab === 'Open' ? !x.complete : x.complete
          ).length

        return (
          <button
            className={`tab-button ${
              tab === selectedTab ? 'tab-selected' : ''
            }`}
            key={tab}
            onClick={() => setSelectedTab(tab)}
          >
            <h4>
              {tab} <span>({tasks})</span>
            </h4>
          </button>
        )
      })}
      <hr />
    </nav>
  )
}
