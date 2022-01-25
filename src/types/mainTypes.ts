export interface TaskItem {
  title: string;
  id: number;
  type: string;
  code?: string;
  status: string;
  user: string;
  description: string;
  priority: string;
  main_details: MainTicketDetails;
  side_details?: SideTicketDetails;
}

export interface MainTicketDetails {
  environment: string;
  user_stories: string;
  affected_areas: string;
}

export interface SideTicketDetails {
  reporter: string;
  labels: string;
  project_manager: string;
  test: string;
  client: string;
  effort: string;
  start_date: string;
  chargable: string;
  fail_count: number | undefined;
}

// const item = {
//   id: null,
//   type: '',
//   code: '',
//   status: '',
//   main_details: {
//     description: '',
//     environment: '',
//     user_stories: '',
//     affected_areas: '',
//   },
//   side_details: {
//     user: '',
//     priority: null,
//     reporter: '',
//     labels: '',
//     project_manager: '',
//     test: '',
//     client: '',
//     effort: '',
//     start_date: '',
//     chargable: '',
//     fail_count: null,
//   }
// }
