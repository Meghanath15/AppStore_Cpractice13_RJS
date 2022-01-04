import './index.css'

const TabItem = props => {
  const {tabDetails, selectedTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    selectedTabId(tabId)
  }

  const tabClassName = isActive ? 'tab-button active' : 'tab-button'

  return (
    <li className="tab-item">
      <button className={tabClassName} onClick={onClickTab} type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
