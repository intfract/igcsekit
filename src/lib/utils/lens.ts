export type Entity = {
  height: number,
  distance: number,
}

export function scale(obj: Entity, focus: number) {
  return focus / (focus - obj.distance)
}

export function distance(obj: Entity, focus: number) {
  return - (obj.distance * focus) / (focus - obj.distance)
}

export function calculate(obj: Entity, focus: number): Entity {
  return {
    height: obj.height * scale(obj, focus),
    distance: distance(obj, focus),
  }
}