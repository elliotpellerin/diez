import {Component, property} from '@diez/engine';
import {Color} from './color';
import {File} from './file';

/**
 * Font registry state.
 * @ignore
 */
export interface FontRegistryState {
  files: File[];
}

/**
 * Enables cross-platform registration of font resources in TrueType format (`.ttf`).
 *
 * Platform bindings are expected to operate behind the hood, parsing the referenced font files and making them
 * available to the local typography system.
 *
 * @noinheritdoc
 */
export class FontRegistry extends Component<FontRegistryState> {
  @property files: File[] = [];

  /**
   * Example usage:
   *
   * ```
   * @property registry = FontRegistry.fromFiles(
   *   'assets/fonts/FontName.ttf',
   *   'assets/fonts/FontName-Bold.ttf',
   * );
   * ```
   */
  static fromFiles (...files: string[]) {
    return new this({
      files: files.map((src) => new File({src})),
    });
  }
}

/**
 * Text style state.
 * @ignore
 */
export interface TextStyleState<T = {}> {
  fontName: string | T;
  fontSize: number;
  color: Color;
}

/**
 * Describes a text style including specification of a font name (understood to specify both a font face and a font
 * weight) as well as a font size in device-local units and a font color.
 *
 * @noinheritdoc
 */
export class TextStyle extends Component<TextStyleState> {
  @property fontName = IOSFonts.Helvetica;
  @property fontSize = 12;
  @property color: Color = Color.hsla(0, 0, 0, 1);
}

/**
 * As a convenience, this enumeration provides the names of all the core fonts supported on iOS.
 */
export enum IOSFonts {
  CopperplateLight = 'Copperplate-Light',
  Copperplate = 'Copperplate',
  CopperplateBold = 'Copperplate-Bold',
  AppleSDGothicNeoThin = 'AppleSDGothicNeo-Thin',
  AppleSDGothicNeoLight = 'AppleSDGothicNeo-Light',
  AppleSDGothicNeoRegular = 'AppleSDGothicNeo-Regular',
  AppleSDGothicNeoBold = 'AppleSDGothicNeo-Bold',
  AppleSDGothicNeoSemiBold = 'AppleSDGothicNeo-SemiBold',
  AppleSDGothicNeoUltraLight = 'AppleSDGothicNeo-UltraLight',
  AppleSDGothicNeoMedium = 'AppleSDGothicNeo-Medium',
  Thonburi = 'Thonburi',
  ThonburiLight = 'Thonburi-Light',
  ThonburiBold = 'Thonburi-Bold',
  GillSansItalic = 'GillSans-Italic',
  GillSansSemiBold = 'GillSans-SemiBold',
  GillSansUltraBold = 'GillSans-UltraBold',
  GillSansLight = 'GillSans-Light',
  GillSansBold = 'GillSans-Bold',
  GillSans = 'GillSans',
  GillSansSemiBoldItalic = 'GillSans-SemiBoldItalic',
  GillSansBoldItalic = 'GillSans-BoldItalic',
  GillSansLightItalic = 'GillSans-LightItalic',
  MarkerFeltThin = 'MarkerFelt-Thin',
  MarkerFeltWide = 'MarkerFelt-Wide',
  HiraMaruProNW4 = 'HiraMaruProN-W4',
  CourierNewPSItalicMT = 'CourierNewPS-ItalicMT',
  CourierNewPSMT = 'CourierNewPSMT',
  CourierNewPSBoldItalicMT = 'CourierNewPS-BoldItalicMT',
  CourierNewPSBoldMT = 'CourierNewPS-BoldMT',
  KohinoorTeluguRegular = 'KohinoorTelugu-Regular',
  KohinoorTeluguMedium = 'KohinoorTelugu-Medium',
  KohinoorTeluguLight = 'KohinoorTelugu-Light',
  AvenirNextCondensedHeavy = 'AvenirNextCondensed-Heavy',
  AvenirNextCondensedMediumItalic = 'AvenirNextCondensed-MediumItalic',
  AvenirNextCondensedRegular = 'AvenirNextCondensed-Regular',
  AvenirNextCondensedUltraLightItalic = 'AvenirNextCondensed-UltraLightItalic',
  AvenirNextCondensedMedium = 'AvenirNextCondensed-Medium',
  AvenirNextCondensedHeavyItalic = 'AvenirNextCondensed-HeavyItalic',
  AvenirNextCondensedDemiBoldItalic = 'AvenirNextCondensed-DemiBoldItalic',
  AvenirNextCondensedBold = 'AvenirNextCondensed-Bold',
  AvenirNextCondensedDemiBold = 'AvenirNextCondensed-DemiBold',
  AvenirNextCondensedBoldItalic = 'AvenirNextCondensed-BoldItalic',
  AvenirNextCondensedItalic = 'AvenirNextCondensed-Italic',
  AvenirNextCondensedUltraLight = 'AvenirNextCondensed-UltraLight',
  TamilSangamMN = 'TamilSangamMN',
  TamilSangamMNBold = 'TamilSangamMN-Bold',
  HelveticaNeueUltraLightItalic = 'HelveticaNeue-UltraLightItalic',
  HelveticaNeueMedium = 'HelveticaNeue-Medium',
  HelveticaNeueMediumItalic = 'HelveticaNeue-MediumItalic',
  HelveticaNeueUltraLight = 'HelveticaNeue-UltraLight',
  HelveticaNeueItalic = 'HelveticaNeue-Italic',
  HelveticaNeueLight = 'HelveticaNeue-Light',
  HelveticaNeueThinItalic = 'HelveticaNeue-ThinItalic',
  HelveticaNeueLightItalic = 'HelveticaNeue-LightItalic',
  HelveticaNeueBold = 'HelveticaNeue-Bold',
  HelveticaNeueThin = 'HelveticaNeue-Thin',
  HelveticaNeueCondensedBlack = 'HelveticaNeue-CondensedBlack',
  HelveticaNeue = 'HelveticaNeue',
  HelveticaNeueCondensedBold = 'HelveticaNeue-CondensedBold',
  HelveticaNeueBoldItalic = 'HelveticaNeue-BoldItalic',
  GurmukhiMNBold = 'GurmukhiMN-Bold',
  GurmukhiMN = 'GurmukhiMN',
  GeorgiaBoldItalic = 'Georgia-BoldItalic',
  GeorgiaItalic = 'Georgia-Italic',
  Georgia = 'Georgia',
  GeorgiaBold = 'Georgia-Bold',
  TimesNewRomanPSItalicMT = 'TimesNewRomanPS-ItalicMT',
  TimesNewRomanPSBoldItalicMT = 'TimesNewRomanPS-BoldItalicMT',
  TimesNewRomanPSBoldMT = 'TimesNewRomanPS-BoldMT',
  TimesNewRomanPSMT = 'TimesNewRomanPSMT',
  SinhalaSangamMNBold = 'SinhalaSangamMN-Bold',
  SinhalaSangamMN = 'SinhalaSangamMN',
  ArialRoundedMTBold = 'ArialRoundedMTBold',
  KailasaBold = 'Kailasa-Bold',
  Kailasa = 'Kailasa',
  KohinoorDevanagariRegular = 'KohinoorDevanagari-Regular',
  KohinoorDevanagariLight = 'KohinoorDevanagari-Light',
  KohinoorDevanagariSemibold = 'KohinoorDevanagari-Semibold',
  KohinoorBanglaRegular = 'KohinoorBangla-Regular',
  KohinoorBanglaSemibold = 'KohinoorBangla-Semibold',
  KohinoorBanglaLight = 'KohinoorBangla-Light',
  ChalkboardSEBold = 'ChalkboardSE-Bold',
  ChalkboardSELight = 'ChalkboardSE-Light',
  ChalkboardSERegular = 'ChalkboardSE-Regular',
  AppleColorEmoji = 'AppleColorEmoji',
  PingFangTCRegular = 'PingFangTC-Regular',
  PingFangTCThin = 'PingFangTC-Thin',
  PingFangTCMedium = 'PingFangTC-Medium',
  PingFangTCSemibold = 'PingFangTC-Semibold',
  PingFangTCLight = 'PingFangTC-Light',
  PingFangTCUltralight = 'PingFangTC-Ultralight',
  GujaratiSangamMN = 'GujaratiSangamMN',
  GujaratiSangamMNBold = 'GujaratiSangamMN-Bold',
  GeezaProBold = 'GeezaPro-Bold',
  GeezaPro = 'GeezaPro',
  DamascusBold = 'DamascusBold',
  DamascusLight = 'DamascusLight',
  Damascus = 'Damascus',
  DamascusMedium = 'DamascusMedium',
  DamascusSemiBold = 'DamascusSemiBold',
  NoteworthyBold = 'Noteworthy-Bold',
  NoteworthyLight = 'Noteworthy-Light',
  AvenirOblique = 'Avenir-Oblique',
  AvenirHeavyOblique = 'Avenir-HeavyOblique',
  AvenirHeavy = 'Avenir-Heavy',
  AvenirBlackOblique = 'Avenir-BlackOblique',
  AvenirBookOblique = 'Avenir-BookOblique',
  AvenirRoman = 'Avenir-Roman',
  AvenirMedium = 'Avenir-Medium',
  AvenirBlack = 'Avenir-Black',
  AvenirLight = 'Avenir-Light',
  AvenirMediumOblique = 'Avenir-MediumOblique',
  AvenirBook = 'Avenir-Book',
  AvenirLightOblique = 'Avenir-LightOblique',
  DiwanMishafi = 'DiwanMishafi',
  AcademyEngravedLetPlain = 'AcademyEngravedLetPlain',
  FuturaCondensedExtraBold = 'Futura-CondensedExtraBold',
  FuturaMedium = 'Futura-Medium',
  FuturaBold = 'Futura-Bold',
  FuturaCondensedMedium = 'Futura-CondensedMedium',
  FuturaMediumItalic = 'Futura-MediumItalic',
  PartyLetPlain = 'PartyLetPlain',
  KannadaSangamMNBold = 'KannadaSangamMN-Bold',
  KannadaSangamMN = 'KannadaSangamMN',
  ArialHebrewBold = 'ArialHebrew-Bold',
  ArialHebrewLight = 'ArialHebrew-Light',
  ArialHebrew = 'ArialHebrew',
  Farah = 'Farah',
  ArialBoldMT = 'Arial-BoldMT',
  ArialBoldItalicMT = 'Arial-BoldItalicMT',
  ArialItalicMT = 'Arial-ItalicMT',
  ArialMT = 'ArialMT',
  Chalkduster = 'Chalkduster',
  KefaRegular = 'Kefa-Regular',
  HoeflerTextItalic = 'HoeflerText-Italic',
  HoeflerTextBlack = 'HoeflerText-Black',
  HoeflerTextRegular = 'HoeflerText-Regular',
  HoeflerTextBlackItalic = 'HoeflerText-BlackItalic',
  OptimaExtraBlack = 'Optima-ExtraBlack',
  OptimaBoldItalic = 'Optima-BoldItalic',
  OptimaItalic = 'Optima-Italic',
  OptimaRegular = 'Optima-Regular',
  OptimaBold = 'Optima-Bold',
  PalatinoItalic = 'Palatino-Italic',
  PalatinoRoman = 'Palatino-Roman',
  PalatinoBoldItalic = 'Palatino-BoldItalic',
  PalatinoBold = 'Palatino-Bold',
  MalayalamSangamMNBold = 'MalayalamSangamMN-Bold',
  MalayalamSangamMN = 'MalayalamSangamMN',
  AlNile = 'AlNile',
  AlNileBold = 'AlNile-Bold',
  LaoSangamMN = 'LaoSangamMN',
  BradleyHandITCTTBold = 'BradleyHandITCTT-Bold',
  HiraMinProNW3 = 'HiraMinProN-W3',
  HiraMinProNW6 = 'HiraMinProN-W6',
  PingFangHKMedium = 'PingFangHK-Medium',
  PingFangHKThin = 'PingFangHK-Thin',
  PingFangHKRegular = 'PingFangHK-Regular',
  PingFangHKUltralight = 'PingFangHK-Ultralight',
  PingFangHKSemibold = 'PingFangHK-Semibold',
  PingFangHKLight = 'PingFangHK-Light',
  HelveticaOblique = 'Helvetica-Oblique',
  HelveticaBoldOblique = 'Helvetica-BoldOblique',
  Helvetica = 'Helvetica',
  HelveticaLight = 'Helvetica-Light',
  HelveticaBold = 'Helvetica-Bold',
  HelveticaLightOblique = 'Helvetica-LightOblique',
  CourierBoldOblique = 'Courier-BoldOblique',
  CourierOblique = 'Courier-Oblique',
  Courier = 'Courier',
  CourierBold = 'Courier-Bold',
  CochinItalic = 'Cochin-Italic',
  CochinBold = 'Cochin-Bold',
  Cochin = 'Cochin',
  CochinBoldItalic = 'Cochin-BoldItalic',
  TrebuchetMSBold = 'TrebuchetMS-Bold',
  TrebuchetMSItalic = 'TrebuchetMS-Italic',
  TrebuchetBoldItalic = 'Trebuchet-BoldItalic',
  TrebuchetMS = 'TrebuchetMS',
  DevanagariSangamMN = 'DevanagariSangamMN',
  DevanagariSangamMNBold = 'DevanagariSangamMN-Bold',
  OriyaSangamMN = 'OriyaSangamMN',
  OriyaSangamMNBold = 'OriyaSangamMN-Bold',
  RockwellItalic = 'Rockwell-Italic',
  RockwellRegular = 'Rockwell-Regular',
  RockwellBold = 'Rockwell-Bold',
  RockwellBoldItalic = 'Rockwell-BoldItalic',
  SnellRoundhand = 'SnellRoundhand',
  SnellRoundhandBold = 'SnellRoundhand-Bold',
  SnellRoundhandBlack = 'SnellRoundhand-Black',
  ZapfDingbatsITC = 'ZapfDingbatsITC',
  BodoniSvtyTwoITCTTBold = 'BodoniSvtyTwoITCTT-Bold',
  BodoniSvtyTwoITCTTBookIta = 'BodoniSvtyTwoITCTT-BookIta',
  BodoniSvtyTwoITCTTBook = 'BodoniSvtyTwoITCTT-Book',
  VerdanaItalic = 'Verdana-Italic',
  Verdana = 'Verdana',
  VerdanaBold = 'Verdana-Bold',
  VerdanaBoldItalic = 'Verdana-BoldItalic',
  AmericanTypewriterCondensedBold = 'AmericanTypewriter-CondensedBold',
  AmericanTypewriterCondensed = 'AmericanTypewriter-Condensed',
  AmericanTypewriterCondensedLight = 'AmericanTypewriter-CondensedLight',
  AmericanTypewriter = 'AmericanTypewriter',
  AmericanTypewriterBold = 'AmericanTypewriter-Bold',
  AmericanTypewriterSemibold = 'AmericanTypewriter-Semibold',
  AmericanTypewriterLight = 'AmericanTypewriter-Light',
  AvenirNextMedium = 'AvenirNext-Medium',
  AvenirNextDemiBoldItalic = 'AvenirNext-DemiBoldItalic',
  AvenirNextDemiBold = 'AvenirNext-DemiBold',
  AvenirNextHeavyItalic = 'AvenirNext-HeavyItalic',
  AvenirNextRegular = 'AvenirNext-Regular',
  AvenirNextItalic = 'AvenirNext-Italic',
  AvenirNextMediumItalic = 'AvenirNext-MediumItalic',
  AvenirNextUltraLightItalic = 'AvenirNext-UltraLightItalic',
  AvenirNextBoldItalic = 'AvenirNext-BoldItalic',
  AvenirNextHeavy = 'AvenirNext-Heavy',
  AvenirNextBold = 'AvenirNext-Bold',
  AvenirNextUltraLight = 'AvenirNext-UltraLight',
  BaskervilleSemiBoldItalic = 'Baskerville-SemiBoldItalic',
  BaskervilleSemiBold = 'Baskerville-SemiBold',
  BaskervilleBoldItalic = 'Baskerville-BoldItalic',
  Baskerville = 'Baskerville',
  BaskervilleBold = 'Baskerville-Bold',
  BaskervilleItalic = 'Baskerville-Italic',
  KhmerSangamMN = 'KhmerSangamMN',
  DidotBold = 'Didot-Bold',
  Didot = 'Didot',
  DidotItalic = 'Didot-Italic',
  SavoyeLetPlain = 'SavoyeLetPlain',
  BodoniOrnamentsITCTT = 'BodoniOrnamentsITCTT',
  Symbol = 'Symbol',
  CharterBlackItalic = 'Charter-BlackItalic',
  CharterBold = 'Charter-Bold',
  CharterRoman = 'Charter-Roman',
  CharterBlack = 'Charter-Black',
  CharterBoldItalic = 'Charter-BoldItalic',
  CharterItalic = 'Charter-Italic',
  MenloBoldItalic = 'Menlo-BoldItalic',
  MenloBold = 'Menlo-Bold',
  MenloItalic = 'Menlo-Italic',
  MenloRegular = 'Menlo-Regular',
  NotoNastaliqUrdu = 'NotoNastaliqUrdu',
  BodoniSvtyTwoSCITCTTBook = 'BodoniSvtyTwoSCITCTT-Book',
  DINAlternateBold = 'DINAlternate-Bold',
  PapyrusCondensed = 'Papyrus-Condensed',
  Papyrus = 'Papyrus',
  HiraginoSansW3 = 'HiraginoSans-W3',
  HiraginoSansW6 = 'HiraginoSans-W6',
  PingFangSCMedium = 'PingFangSC-Medium',
  PingFangSCSemibold = 'PingFangSC-Semibold',
  PingFangSCLight = 'PingFangSC-Light',
  PingFangSCUltralight = 'PingFangSC-Ultralight',
  PingFangSCRegular = 'PingFangSC-Regular',
  PingFangSCThin = 'PingFangSC-Thin',
  MyanmarSangamMN = 'MyanmarSangamMN',
  MyanmarSangamMNBold = 'MyanmarSangamMN-Bold',
  NotoSansChakmaRegular = 'NotoSansChakma-Regular',
  Zapfino = 'Zapfino',
  BodoniSvtyTwoOSITCTTBookIt = 'BodoniSvtyTwoOSITCTT-BookIt',
  BodoniSvtyTwoOSITCTTBook = 'BodoniSvtyTwoOSITCTT-Book',
  BodoniSvtyTwoOSITCTTBold = 'BodoniSvtyTwoOSITCTT-Bold',
  EuphemiaUCAS = 'EuphemiaUCAS',
  EuphemiaUCASItalic = 'EuphemiaUCAS-Italic',
  EuphemiaUCASBold = 'EuphemiaUCAS-Bold',
  DINCondensedBold = 'DINCondensed-Bold',
}

/**
 * As a convenience, this enumeration provides the names of all the core fonts supported on Android.
 */
export enum AndroidFonts {
  RobotoThin = 'Roboto-Thin',
  RobotoThinItalic = 'Roboto-ThinItalic',
  RobotoLight = 'Roboto-Light',
  RobotoLightItalic = 'Roboto-LightItalic',
  RobotoRegular = 'Roboto-Regular',
  RobotoItalic = 'Roboto-Italic',
  RobotoMedium = 'Roboto-Medium',
  RobotoMediumItalic = 'Roboto-MediumItalic',
  RobotoBlack = 'Roboto-Black',
  RobotoBlackItalic = 'Roboto-BlackItalic',
  RobotoBold = 'Roboto-Bold',
  RobotoBoldItalic = 'Roboto-BoldItalic',
  RobotoCondensedLight = 'RobotoCondensed-Light',
  RobotoCondensedLightItalic = 'RobotoCondensed-LightItalic',
  RobotoCondensedRegular = 'RobotoCondensed-Regular',
  RobotoCondensedItalic = 'RobotoCondensed-Italic',
  RobotoCondensedMedium = 'RobotoCondensed-Medium',
  RobotoCondensedMediumItalic = 'RobotoCondensed-MediumItalic',
  RobotoCondensedBold = 'RobotoCondensed-Bold',
  RobotoCondensedBoldItalic = 'RobotoCondensed-BoldItalic',
  NotoSerifRegular = 'NotoSerif-Regular',
  NotoSerifBold = 'NotoSerif-Bold',
  NotoSerifItalic = 'NotoSerif-Italic',
  NotoSerifBoldItalic = 'NotoSerif-BoldItalic',
  DroidSansMono = 'DroidSansMono',
  CutiveMono = 'CutiveMono',
  ComingSoon = 'ComingSoon',
  DancingScriptRegular = 'DancingScript-Regular',
  DancingScriptBold = 'DancingScript-Bold',
  CarroisGothicSCRegular = 'CarroisGothicSC-Regular',
}
