interface SignIn {
  User: User;
  AuthorizationToken: AuthorizationToken;
}

interface User {
  Id: number;
  UserName: string;
  FullName: string;
  ClientRoles: string[];
}

interface AuthorizationToken {
  Token: string;
  TokenExpires: Date;
}

interface MediaListModel {
  Entities?: MediaModel[];
  PageSize: number;
  PageNumber: number;
  TotalCount: number;
  CacheDataValidTo?: string;
  SourceType: string;
}

interface MediaModel {
  Id: number;
  Guid: string;
  MediaTypeCode?: string;
  MediaTypeDisplayName?: string;
  MediaAgeRestrictionValueMin: number;
  MediaAgeRestrictionImageUrl?: string;
  Title?: string;
  Description?: string;
  Year?: number;
  Duration?: number;
  ParentMediaId?: number;
  ParentMediaTitle?: string;
  OrderInParent?: number;
  IsTrialContentAvailable: boolean;
  AvailableFrom: string;
  AvailableTo: string;
  StartDateTime: string;
  EndDateTime: string;
  People: any;
  Categories: any;
  Images: any;
  Products: any;
  PurchaseOffers: any;
  Media: any;
  SimilarMedia: any;
}

interface MediaPlayInfoModel {
  MediaId: number;
  Title?: string;
  Description?: string;
  MediaTypeCode?: string;
  MediaTypeDisplayName?: string;
  Timestamp: any;
  StreamId: number;
  Provider?: string;
  ContentUrl?: string;
  ContentType?: string;
  DrmLicenseServer?: string;
  DrmToken?: string;
  DrmType?: string;
  DrmCdmData?: string;
}
