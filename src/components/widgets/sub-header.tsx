import styles from "@/styles/header.module.css";
import { useState } from 'react'
import { LocationSelectorOption } from '@/interfaces';
import SearchInput from '@/components/common/ui/inputs/search-input';
import SellButton from '@/components/common/sell-button';
import MessageButton from '@/components/common/message-button';
import NotificationButton from '@/components/common/notification-button';
import { ProfileMenu } from '@/components/common/profile-menu';
import LanguageToggle from '@/components/common/language-toggle';
import LocationSelector from '@/components/common/location-selector';
import { Icons } from '../common/svg/icons';

function SubHeader() {
  const options: LocationSelectorOption[] = [
    { value: "beirut", label: "Beirut" },
    { value: "mount_lebanon", label: "Mount Lebanon" },
    { value: "north_lebanon", label: "North Lebanon" },
    { value: "akkar", label: "Akkar" },
    { value: "beqaa", label: "Beqaa" },
    { value: "baalbek_hermel", label: "Baalbek‑Hermel" },
    { value: "south_lebanon", label: "South Lebanon" },
    { value: "nabatieh", label: "Nabatieh" },
    { value: "keserwan_jbeil", label: "Keserwan‑Jbeil" },
  ];

  const [selected, setSelected] = useState<LocationSelectorOption | null>(null);
  const [search, setSearch] = useState("");

  const handleSearch = (query: string) => {
    setSearch(query);
  };

  return (
    <div className={styles.subHeader}>
        <LocationSelector
          options={options}
          value={selected}
          onChange={setSelected}
          icon={<Icons.mapPin style={{ color: "var(--yellow)" }} />}
        />
        <SearchInput
          value={search}
          onSearch={handleSearch}
          onChange={setSearch}
          placeholder='Find Cars, Mobile Phones and more...'
        />
        <div className={styles.actionButtons}>
          <LanguageToggle />
          <MessageButton />
          <NotificationButton />
          <ProfileMenu />
          <SellButton />
        </div>
    </div>
  )
}

export default SubHeader