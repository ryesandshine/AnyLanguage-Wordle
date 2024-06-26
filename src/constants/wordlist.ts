import { CONFIG } from './config'

export const WORDS = [
'kutis',
'banat',
'tungo',
'supot',
'naman',
'sabit',
'sapat',
'salok',
'balak',
'tulog',
'gigil',
'sabay',
'palda',
'gilid',
'gitna',
'kanan',
'malay',
'binhi',
'bungo',
'sanhi',
'dilaw',
'takot',
'baboy',
'likha',
'plato',
'bango',
'hagis',
'tinik',
'bunga',
'marso',
'malas',
'pitas',
'tukso',
'tatlo',
'sakto',
'siyam',
'bigat',
'sibat',
'sukat',
'balot',
'wasto',
'kusot',
'hilaw',
'buwan',
'rosas',
'harap',
'maliw',
'kalbo',
'munti',
'tigil',
'hinog',
'lapis',
'sukli',
'bahaw',
'lunok',
'urong',
'silbi',
'buhok',
'bukas',
'bayad',
'sayaw',
'kilos',
'manok',
'hugas',
'selos',
'balik',
'bilog',
'timba',
'tibay',
'sulat',
'sabik',
'ginto',
'batok',
'pikon',
'basag',
'lakas',
'tunaw',
'bilis',
'taray',
'tanim',
'tanod',
'hipon',
'doble',
'tunay',
'silip',
'lagim',
'galit',
'lipon',
'enero',
'bakal',
'putok',
'katas',
'tamad',
'dilim',
'bihon',
'itlog',
'punas',
'lubid',
'ngiti',
'tamis',
'hiram',
'banig',
'dahon',
'sarap',
'samba',
'sunog',
'sulok',
'sapot',
'buwis',
'libro',
'yakap',
'ilong',
'kupas',
'bigas',
'pasok',
'bahay',
'batis',
'simoy',
'galaw',
'sikat',
'silid',
'wakas',
'dagat',
'kinis',
'daloy',
'tubig',
'lunes',
'kagat',
'likod',
'dilig',
'laman',
'kamay',
'atras',
'aklat',
'nayon',
'yaman',
'tuhod',
'palay',
'karne',
'sabaw',
'lakad',
'sinta',
'bagal',
'hinto',
'petsa',
'kanin',
'bibig',
'likas',
'hasik',
'bayan',
'santo',
'hanap',
'mismo',
'bakit',
'tunog',
'tipon',
'katha',
'damay',
'lamat',
'sampu',
'utang',
'sakal',
'talon',
'dapat',
'dasal',
'sugod',
'patay',
'kotse',
'asado',
'tokwa',
'lapad',
'adobo',
'sobra',
'gatas',
'tapat',
'tanaw',
'buhay',
'multo',
'tusok',
'sipit',
'abril',
'buslo',
'hulyo',
'kahon',
]

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
