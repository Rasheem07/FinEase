export async function fetchCards() {
    const response = await fetch("/api/card/fetchcards", {
        cache: "default",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token") as string
        }
      });
      const cards = await response.json();
      return cards
}