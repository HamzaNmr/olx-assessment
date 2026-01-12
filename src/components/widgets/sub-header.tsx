import { useState } from 'react'
import Selector from '../common/ui/inputs/selector/selector';
import styles from "@/styles/header.module.css";
import SearchInput from '../common/ui/inputs/search-input/search-input';
import SellButton from '../common/ui/buttons/sell-button';
import MessageButton from '../common/ui/buttons/message-button';
import NotificationButton from '../common/ui/buttons/notification-button';
import { SelectorOption } from '@/interfaces';
import { ProfileMenu } from '../common/ui/dropdown-menu/profile-menu';
import LanguageToggle from '../common/ui/buttons/language-toggle';

function SubHeader() {
  const options: SelectorOption[] = [
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

  const [selected, setSelected] = useState<SelectorOption | null>(null);
  const [search, setSearch] = useState("");

  const handleSearch = (query: string) => {
    setSearch(query);
  };

  return (
    <div className={styles.subHeader}>
        <Selector
            options={options}
            value={selected}
            onChange={setSelected}
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