/*  throttleFunction va a recibir un input, junto con un timer y va a 
    // comprobar si el timer ha terminado, si la respuesta es si, volvera a 
    llevar a cabo la accion. en caso contrario esperara a que termine
*/
/*  let time = jest.useFakeTimers();

describe('throttle', () => {
  it('debe comprobat si el timer ha terminado, en cuyo caso tendra que llamar a la funcion', () => {
    throttle(mockFn, 2000);
    expect(time) == 0
    const mockFn = jest.fn();
    expect(mockFn).not.toBeCalled();

    debouncedFn();

    // Avanzar el tiempo en 200ms
    jest.advanceTimersByTime(200);

    expect(mockFn).toBeCalled();
  }); */