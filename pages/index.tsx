import WalletConnectCard from '../components/connectorCards/WalletConnectCard'
import ProviderExample from '../components/ProviderExample'

export default function Home() {
  return (
    <>
      <ProviderExample />
      <div style={{ display: 'flex', flexFlow: 'wrap', fontFamily: 'sans-serif' }}>
        <WalletConnectCard />
      </div>
    </>
  )
}
