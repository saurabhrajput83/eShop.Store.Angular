
export default interface DepartmentModel {
  departmentId: number;
  departmentName: string,
  parentId: number,
  Childrens: DepartmentModel[]
}
