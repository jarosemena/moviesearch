// Script de prueba para verificar la conexión con TMDB API
// Ejecutar con: node test-api.js

const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OWZjOTlhNTQ3NjYyMDdkMjFjZjU3YzQ4ZGRjOTM2MCIsIm5iZiI6MTc2MzQzMzEzOS40MzM5OTk4LCJzdWIiOiI2OTFiZGFiM2QxMWNiOGRlY2JjN2QxZjYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Uj-SFEvgADnZClHP2pJv9akkq9tQvrnGQobETr6c5nQ';
const BASE_URL = 'https://api.themoviedb.org/3';

async function testConnection() {
  console.log('🔍 Probando conexión con TMDB API...\n');

  try {
    // Test 1: Obtener película específica
    console.log('Test 1: Obtener detalles de película (ID: 11)');
    const movieResponse = await fetch(`${BASE_URL}/movie/11?language=es-ES`, {
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    if (!movieResponse.ok) {
      throw new Error(`Error ${movieResponse.status}: ${movieResponse.statusText}`);
    }

    const movie = await movieResponse.json();
    console.log('✅ Éxito!');
    console.log(`   Película: ${movie.title}`);
    console.log(`   Rating: ${movie.vote_average}/10`);
    console.log(`   Año: ${movie.release_date?.split('-')[0]}\n`);

    // Test 2: Obtener películas populares
    console.log('Test 2: Obtener películas populares');
    const popularResponse = await fetch(`${BASE_URL}/movie/popular?language=es-ES&page=1`, {
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    if (!popularResponse.ok) {
      throw new Error(`Error ${popularResponse.status}: ${popularResponse.statusText}`);
    }

    const popular = await popularResponse.json();
    console.log('✅ Éxito!');
    console.log(`   Total de películas: ${popular.total_results}`);
    console.log(`   Primera película: ${popular.results[0]?.title}\n`);

    // Test 3: Obtener géneros
    console.log('Test 3: Obtener lista de géneros');
    const genresResponse = await fetch(`${BASE_URL}/genre/movie/list?language=es-ES`, {
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    if (!genresResponse.ok) {
      throw new Error(`Error ${genresResponse.status}: ${genresResponse.statusText}`);
    }

    const genres = await genresResponse.json();
    console.log('✅ Éxito!');
    console.log(`   Géneros disponibles: ${genres.genres.length}`);
    console.log(`   Ejemplos: ${genres.genres.slice(0, 3).map(g => g.name).join(', ')}\n`);

    console.log('🎉 ¡Todas las pruebas pasaron exitosamente!');
    console.log('✅ Tu Access Token está configurado correctamente');
    console.log('✅ La aplicación está lista para usar\n');

  } catch (error) {
    console.error('❌ Error en la prueba:');
    console.error(`   ${error.message}\n`);
    
    if (error.message.includes('401')) {
      console.log('💡 Solución:');
      console.log('   - Verifica que el Access Token sea correcto');
      console.log('   - Asegúrate de usar el "Read Access Token" de TMDB');
      console.log('   - Obtén uno nuevo en: https://www.themoviedb.org/settings/api\n');
    } else if (error.message.includes('fetch')) {
      console.log('💡 Solución:');
      console.log('   - Verifica tu conexión a internet');
      console.log('   - Comprueba que la URL de la API sea correcta\n');
    }
  }
}

// Ejecutar pruebas
testConnection();
