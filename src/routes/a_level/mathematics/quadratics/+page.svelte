<script lang="ts">
  import { end, frac, left, math, right, wrap } from '$lib/utils/katex'
</script>

<section>
  <h1>Quadratics</h1>
  <h2>Completing the Square</h2>
  <p>Writing the standard form of a quadratic {@html math('ax^2+bx+c')} in vertex form {@html math('a(x-h)^2+k')} is called completing the square.</p>
  <h3>Procedure</h3>
  <ol>
    <li>Start with the quadratic expression {@html math('ax^2+bx+c')}</li>
    <li>Factor out the coefficient of {@html math('x^2')} from the whole expression</li>
    <li>Complete the square by adding and subtracting {@html math(`${wrap(frac('b', '2a'))}^2`)}</li>
    <li>Factorise the perfect square trinomial</li>
    <li>Simplify the expression</li>
  </ol>
  <div class="katex-display">
    {
      @html math([
        'ax^2+bx+c',
        frac('a', 'a') + wrap('ax^2+bx+c'),
        'a' + wrap(`x+${frac('b', 'a')}x+${frac('c', 'a')}`),
        'a' + wrap(`x+${frac('b', 'a')}x+${wrap(frac('b', '2a'))}^2-${wrap(frac('b', '2a'))}^2+${frac('c', 'a')}`),
        'a' + wrap(`x+${frac('b', 'a')}x+${wrap(frac('b', '2a'))}^2`) + '-a' + wrap(`${wrap(frac('b', '2a'))}^2+${frac('c', 'a')}`),
        'a' + `${wrap(`x+${frac('b', '2a')}`)}^2-${frac('b^2', '4a')}+c`
      ].join(end))
    }
  </div>
  <h3>Vertex Form</h3>
  <p>Completing the square allows the identification of the vertex {@html math(wrap('h,k'))} of a parabola. The vertex is the turning point and lies on the axis of symmetry.</p>
  <div class="katex-display">
    {@html math(`h=-${frac('b', '2a')}${end}k=c-${frac('b^2', '4a')}`)}
  </div>
</section>