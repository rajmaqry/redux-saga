export interface IIngestionConfig {
  type: string;
  sparkopmap?: { [option: string]: string };
  isFile?: boolean;
  fileprops?: IFileProps;
  awsS3config?: IAWSS3;
  awsAthenaConfig?: IAWSAthena;
  jdbcConfig?: IJdbcConf;
  kafkaConfig?: IKafka;
}

export interface IFileProps {
  fileType: string;
  header?: boolean;
  delimiter?: string;
}

export interface IAWSS3 {
  s3path: string;
  assumeRole?: boolean;
  assumeRoleArn?: string;
  accessKey?: string;
  secretKey?: string;
  sessionKey?: string;
  proxyHost?: string;
  proxyPort?: string;
}

export interface IAWSAthena {}
export interface IJdbcConf {}
export interface IKafka {}
