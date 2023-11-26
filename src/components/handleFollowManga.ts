export function AddToFollowList(title: string): number {
  if (!localStorage.getItem("manga")) {
    localStorage.setItem("manga", JSON.stringify([{ title }]));
    return 1;
  }
  let data: any = localStorage.getItem("manga");
  const ArrayData: any = JSON.parse(data);
  let key: boolean = false;
  ArrayData.forEach((element: any) => {
    if (element?.title === title) {
      key = true;
      return;
    }
  });
  if (key) {
    return 0;
  } else {
    ArrayData.push({
      title,
    });
  }
  localStorage.setItem("manga", JSON.stringify(ArrayData));
  return 1;
}
export function RemoveFromFollow(title: string): number {
  if (!localStorage.getItem("manga")) {
    return 0;
  }
  let data: any = localStorage.getItem("manga");
  let ArrayData: any = JSON.parse(data);
  let key: boolean = false;

  ArrayData.forEach((element: any, index: number) => {
    if (element?.title === title) {
      ArrayData.splice(title, 1);
      key = true;
      return;
    }
  });
  if (!key) {
    return 0;
  }
  localStorage.setItem("manga", JSON.stringify(ArrayData));
  return 1;
}

export function IsExistFollow(title: string): boolean {
  if (!localStorage.getItem("manga")) {
    return false;
  }
  let data: any = localStorage.getItem("manga");
  const ArrayData: any = JSON.parse(data);
  let key: boolean = false;

  ArrayData.forEach((element: any) => {
    if (element?.title === title) {
      key = true;
      return;
    }
  });
  if (!key) {
    return false;
  }
  return true;
}
