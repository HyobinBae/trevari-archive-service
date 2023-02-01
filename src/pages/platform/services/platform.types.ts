
export interface MagazineList {
  __typeName?: 'getMagazineList';
  magazine?: Array<MagazineListProps>
}

export interface MagazineListProps {
  id?: number
  contents?: MagazineProps[] | undefined
}

export interface MagazineProps {
  title?: string
  src?: string
  type?: string
}

export interface ReplayList  {
  __typeName?: 'getReplayList'
  replayList?: Array<ReplayListProps>
}


export interface ReplayListProps {
  title?: string
  description?: string
  src?: string
  type?: string
}

export interface PlatformProps {
  club_title?: string
  sub_title?: string
}

export interface SearchParams {
  archive?: object
}

export interface LiveDate {
  date?: string
}

export interface LiveLink {
  link?: string
}