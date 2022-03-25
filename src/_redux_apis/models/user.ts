export interface IUser {
  user_id: string;
  view_page_permissions: string[];
  role_mappings: string[];
  password: string;
  password_last_changed: string;
  first_name: string;
  last_name: string;
  workspace_map: IWorkSpaceMap[];
  token?: string;
}

export interface IWorkSpaceMap {
  workspace_id: string;
  workspace_name: string;
}

export interface IUserRequest {
  user_id: string;
  password: string;
}
